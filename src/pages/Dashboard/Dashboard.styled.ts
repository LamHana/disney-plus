import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import AddIcon from '@mui/icons-material/Add';

export const Container = styled.main`
    position: relative;
    max-width: 1440px;
    min-height: calc(100vh - 70px);
    /* padding: 0 calc(3.5vw + 5px); */
    overflow: hidden;
    margin: 0 auto;
    /* background-color: #f5f5f5; */
`;

export const Table = styled(DataGrid)`
    .MuiTablePagination-selectLabel,
    .MuiTablePagination-displayedRows,
    .MuiTablePagination-input,
    .MuiDataGrid-cell,
    .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon,
    .MuiDataGrid-columnHeaderTitle {
        color: white;
    }
    .MuiTablePagination-actions svg {
        color: white;
    }

    .MuiSelect-iconStandard {
        color: white;
    }

    .description-cell {
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .striped-row {
        background-color: #f0f0f0; /* Set the background color for striped rows */
    }

    /* Define a style for odd rows */
    .striped-row:nth-child(odd) {
        background-color: #ffffff; /* Set the background color for even rows */
    }

    a {
        color: blue;
    }
`;

export const CustomCell = styled.div`
    white-space: break-spaces;
`;

export const ActionList = styled.div`
    display: flex;
    gap: 10px;
`;

export const RemoveIcon = styled(DeleteIcon)`
    color: red;
`;

export const Btn = styled.button`
    /* CSS */

    background-color: rgba(0, 0, 0, 0.8);
    border: 1px solid silver;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease 0s;
    vertical-align: middle;
    transition: all 0.2s ease 0s;
    padding-left: 16px;
    padding-right: 16px;
    height: 40px;
    font-size: 16px;
    text-transform: uppercase;
    color: silver;

    &:active,
    &:hover {
        outline: 0;
    }

    &:hover {
        background: silver;
        span {
            color: black;
        }
        svg {
            color: #000;
        }
    }
`;

export const BtnLight = styled.button`
    /* CSS */

    background-color: #fff;
    border: 1px solid black;
    align-items: center;
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    text-align: center;
    transition: all 0.2s ease 0s;
    vertical-align: middle;
    transition: all 0.2s ease 0s;
    padding-left: 16px;
    padding-right: 16px;
    height: 40px;
    font-size: 16px;
    text-transform: uppercase;
    color: black;

    &:active,
    &:hover {
        outline: 0;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.8);
        span {
            color: #fff;
        }
        svg {
            color: #fff;
        }
    }
`;

export const AddMovie = styled.div`
    width: 100%;
    margin-top: 30px;
    display: flex;
    justify-content: flex-end;
`;

export const PlusIcon = styled(AddIcon)`
    color: silver;
`;
