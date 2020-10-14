import styled, { css } from 'styled-components';

const dragActive = css`
    border-color: #78e5d5;
`;

const dragReject = css`
    border-color: #e57878;
`;

export const DropContainer = styled.div.attrs({
    className: 'dropzone',
})`
    border: dotted 3px #20a0f1;
    border-radius: 4px;
    cursor: pointer;
    transition: height 0.2s ease;
    ${(props) => props.isDragActive && dragActive};
    ${(props) => props.isDragReject && dragReject};
    &:hover {
        box-shadow: 0 0 1px #31b9f3, 0 0 4px #00f492;
    }
`;

const messageColors = {
    default: '#999',
    error: '#e57878',
    success: '#78e5d5',
};

export const UploadMessage = styled.p`
    display: flex;
    color: ${(props) => messageColors[props.type || 'default']};
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    background-color: #042334;

    font-weight: bold;
    font-size: 15px;
    color: #00f492;
    &:hover {
        color: #00f492;
        text-shadow: 0 0 1px #31b9f3, 0 0 10px #31b9f3;
    }
`;
