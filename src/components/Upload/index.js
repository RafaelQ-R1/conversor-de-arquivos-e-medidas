/* eslint-disable consistent-return */
/* eslint-disable no-unused-expressions */
/* eslint-disable react/prop-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable radix */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/sort-comp */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import { uniqueId } from 'lodash';
import filesize from 'filesize';

import { apiLocal } from '../../services/api';

import { Container, Content, Convert, Properties, Types } from './styles';

import Dropzone from '../DropZone';
import FileList from '../FileList';

class Upload extends Component {
    state = {
        uploadedFiles: [],
        low: null,
        medium: null,
        good: null,
        format: 'png',
    };

    async componentDidMount() {
        const response = await apiLocal.get('uploadfile');

        this.setState({
            uploadedFiles: response.data.map((file) => ({
                id: file._id,
                name: file.name,
                readableSize: filesize(file.size),
                preview: file.url,
                uploaded: true,
                url: file.url,
            })),
        });
    }

    componentWillUnmount() {
        this.state.uploadedFiles.forEach((file) =>
            URL.revokeObjectURL(file.preview)
        );
    }

    handleClick = () => {
        const { uploadedFiles } = this.state;
        if (!Array.isArray(uploadedFiles) || !uploadedFiles.length)
            return alert('nenhum arquivo selecionado');

        this.props.onClick &&
            this.props.onClick([this.state.uploadedFiles, this.state.format]);
    };

    selectLow = () => {
        this.setState({
            low: true,
            medium: false,
            good: false,
        });
    };

    selectMedium = () => {
        this.setState({
            low: false,
            medium: true,
            good: false,
        });
    };

    selectGood = () => {
        this.setState({
            low: false,
            medium: false,
            good: true,
        });
    };

    handleUpload = (files) => {
        const uploadedFiles = files.map((file) => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }));

        this.setState({
            uploadedFiles,
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map((uploadedFile) => {
                return id === uploadedFile.id
                    ? { ...uploadedFile, ...data }
                    : uploadedFile;
            }),
        });
    };

    processUpload = (uploadedFile) => {
        const data = new FormData();

        data.append('file', uploadedFile.file, uploadedFile.name);

        apiLocal
            .post('uploadfile', data, {
                onUploadProgress: (e) => {
                    const progress = parseInt(
                        Math.round((e.loaded * 100) / e.total)
                    );

                    this.updateFile(uploadedFile.id, {
                        progress,
                    });
                },
            })
            .then((response) => {
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data._id,
                    url: response.data.url,
                    path: response.data.path,
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, {
                    error: true,
                });
            });
    };

    render() {
        const { uploadedFiles, low, medium, good } = this.state;
        const { accept, message, itens, onChange, exit } = this.props;
        return (
            <>
                <Convert>
                    <button
                        id="Browse"
                        type="button"
                        onClick={this.handleClick}
                    >
                        Converter
                    </button>
                    <div id="Output">
                        <strong>{exit}</strong>
                        <select id="Options" type="button" onChange={onChange}>
                            {itens.map((item) => (
                                <option key={item} value={item}>
                                    {item}
                                </option>
                            ))}
                        </select>
                    </div>
                </Convert>
                <Container>
                    <Content>
                        <Dropzone
                            accept={accept}
                            message={message}
                            onUpload={this.handleUpload}
                        />
                        {!!uploadedFiles.length && (
                            <FileList files={uploadedFiles} />
                        )}
                    </Content>
                </Container>
                <Properties>
                    <div id="Quality">
                        <strong>Qualidade de saída</strong>
                        <input
                            checked={low}
                            type="radio"
                            onClick={this.selectLow}
                        />
                        <h6>baixa</h6>
                        <input
                            checked={medium}
                            type="radio"
                            onClick={this.selectMedium}
                        />
                        <h6>média</h6>
                        <input
                            checked={good}
                            type="radio"
                            onClick={this.selectGood}
                        />
                        <h6>alta</h6>
                    </div>
                </Properties>
                <Types>
                    JPEG, TIFF, PNG, PSD, GIF, BMP, RAW, PCX, JXR, DNG, CRW,
                    CR2, NEF, RAF, MRW, PEF, S3F, SRF, ARW, SRW, X3F, RW2
                    formats supported
                </Types>
            </>
        );
    }
}

export default Upload;
