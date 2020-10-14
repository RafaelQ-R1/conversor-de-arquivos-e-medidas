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

import { Container, Content } from './styles';

import Dropzone from '../DropZone';
import FileList from '../FileList';

class Upload extends Component {
    state = {
        uploadedFiles: [],
    };

    componentWillUnmount() {
        this.state.uploadedFiles.forEach((file) =>
            URL.revokeObjectURL(file.preview)
        );
    }

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
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, {
                    error: true,
                });
            });
    };

    render() {
        const { uploadedFiles } = this.state;
        const { accept, message } = this.props;
        return (
            <Container>
                <Content>
                    <Dropzone
                        accept={accept}
                        message={message}
                        onUpload={this.handleUpload}
                    />
                    {!!uploadedFiles.length && (
                        <FileList
                            files={uploadedFiles}
                            onDelete={this.handleDelete}
                        />
                    )}
                </Content>
            </Container>
        );
    }
}

export default Upload;
