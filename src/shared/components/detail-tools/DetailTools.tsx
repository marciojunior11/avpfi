import { Box, Paper, useTheme, Button, Icon, Divider, Skeleton } from "@mui/material"

interface IDetailToolsProps {
    textoBotaoNovo?: string,
    mostrarBotaoNovo?: boolean,
    mostrarBotaoVoltar?: boolean,
    mostrarBotaoApagar?: boolean,
    mostrarBotaoSalvar?: boolean,
    mostrarBotaoSalvarFechar?: boolean,

    botaoNovoIsLoading?: boolean,
    botaoVoltarIsLoading?: boolean,
    botaoApagarIsLoading?: boolean,
    botaoSalvarIsLoading?: boolean,
    botaoSalvarFecharIsLoading?: boolean,

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

    botaoNovoIsLoading = false,
    botaoVoltarIsLoading = false,
    botaoApagarIsLoading = false,
    botaoSalvarIsLoading = false,
    botaoSalvarFecharIsLoading = false,

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
            { (mostrarBotaoSalvar && !botaoSalvarIsLoading) && (
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

            { botaoSalvarIsLoading && (
                <Skeleton width={110} height={60}/>
            )}

            { (mostrarBotaoSalvarFechar && !botaoSalvarFecharIsLoading) && (
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

            { botaoSalvarFecharIsLoading && (
                <Skeleton width={180} height={60}/>
            )}

            { (mostrarBotaoApagar && !botaoApagarIsLoading) && (
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

            { botaoApagarIsLoading && (
                <Skeleton width={110} height={60}/>
            )}

            { (mostrarBotaoNovo && !botaoNovoIsLoading) && (
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

            { botaoNovoIsLoading && (
                <Skeleton width={110} height={60}/>
            )}

            <Divider variant='middle' orientation='vertical'/>

            { (mostrarBotaoVoltar && !botaoVoltarIsLoading) && (
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

            {botaoVoltarIsLoading && (
              <Skeleton width={110} height={60}/>  
            )}
        </Box>
    )
}