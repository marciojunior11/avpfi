import { Box, Paper, useTheme, Button, Icon, Divider } from "@mui/material"

interface IDetailToolsProps {
    textoBotaoNovo?: string,
    mostrarBotaoNovo?: boolean,
    mostrarBotaoVoltar?: boolean,
    mostrarBotaoApagar?: boolean,
    mostrarBotaoSalvar?: boolean,
    mostrarBotaoSalvarFechar?: boolean,

    handleClickNovo?: () => void,
    handleClickVoltar?: () => void,
    handleClickApagar?: () => void,
    handleClickSalvar?: () => void,
    handleClickSalvarFechar?: () => void,
}

export const DetailTools: React.FC<IDetailToolsProps> = ({
    textoBotaoNovo = 'novo',

    mostrarBotaoNovo = true,
    mostrarBotaoVoltar = true,
    mostrarBotaoApagar = true,
    mostrarBotaoSalvar = true,
    mostrarBotaoSalvarFechar = false,

    handleClickNovo,
    handleClickVoltar,
    handleClickApagar,
    handleClickSalvar,
    handleClickSalvarFechar,
}) => {

    const theme = useTheme();

    return (
        <Box
            gap={1}
            marginX={1}
            padding={1}
            paddingX={2}
            display='flex'
            alignItems='center'
            height={theme.spacing(5)}
            component={Paper}
        >
            { mostrarBotaoSalvar && (
                <Button
                    color='primary'
                    startIcon={<Icon>save</Icon>}
                    variant='contained'
                    disableElevation
                    onClick={handleClickSalvar}
                >
                    Salvar
                </Button>
            )}

            { mostrarBotaoSalvarFechar && (
                <Button
                    color='primary'
                    startIcon={<Icon>save</Icon>}
                    variant='outlined'
                    disableElevation
                    onClick={handleClickSalvarFechar}
                >
                    Salvar e fechar
                </Button>
            )}

            { mostrarBotaoApagar && (
                <Button
                    color='primary'
                    startIcon={<Icon>delete</Icon>}
                    variant='outlined'
                    disableElevation
                    onClick={handleClickApagar}
                >
                    Apagar
                </Button>
            )}

            { mostrarBotaoNovo && (
                <Button
                    color='primary'
                    startIcon={<Icon>add</Icon>}
                    variant='outlined'
                    disableElevation
                    onClick={handleClickNovo}
                >
                    {textoBotaoNovo}
                </Button>
            )}

            <Divider variant='middle' orientation='vertical'/>

            { mostrarBotaoVoltar && (
                <Button
                    color='primary'
                    startIcon={<Icon>arrow_back</Icon>}
                    variant='outlined'
                    disableElevation
                    onClick={handleClickVoltar}
                >
                    Voltar
                </Button>
            )}

        </Box>
    )
}