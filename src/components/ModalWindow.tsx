import React, { useRef } from "react";
import styled from "styled-components";
// モーダル
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Modal from "@material-ui/core/Modal";
// テキストフィールド
import TextField from '@material-ui/core/TextField';
// 外部コンポーネント
import SideMenuAddButton from "./SideMenuAddButton";
import ModalWindowCheckBox from "../components/ModalWindowCheckBox";
// ボタン
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            '& > *': {
                width: '50ch',
            }
        },
        button: {
            margin: theme.spacing(1),
        },
    }),
);

interface Props {
    menuAdd: (todoText: string) => void;
}

const SimpleModal: React.FC<Props> = props => {
    // モーダル処理
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // サイドメニュー追加
    const textInputRef = useRef<HTMLInputElement>(null);
    const modalSubmitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = textInputRef.current!.value;
        props.menuAdd(enteredText);
        handleClose();
    };

    const classes = useStyles();

    return (
        <div>
            <SideMenuAddButton onClick={handleOpen} />
            <ModalWindow
                style={{ outline: "none" }}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div style={{ outline: "none" }}>
                    <Fade in={open}>
                        <AddList>
                            <form className={classes.root} onSubmit={modalSubmitHandler}>
                                <TextField required id="standard-basic" label="Add Title" inputRef={textInputRef} />
                                <CheckBoxList>
                                    <ModalWindowCheckBox labelname="music" />
                                    <ModalWindowCheckBox labelname="video" />
                                    <ModalWindowCheckBox labelname="website" />
                                    <ModalWindowCheckBox labelname="shopping" />
                                    <ModalWindowCheckBox labelname="engineer" />
                                </CheckBoxList>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    className={classes.button}
                                    type="submit"
                                >Add</Button>
                            </form>
                        </AddList>
                    </Fade>
                </div>
            </ModalWindow>
        </div>
    );
}

const ModalWindow = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
  &:focus {
    outline: "none";
  }
`;

const AddList = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  text-align:center;
  border-radius: 20px;
  background-color: white;
  width: 500px;
  height: 300px;
`;

const CheckBoxList = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content:center;
`;

export default SimpleModal;
