import { alpha, styled } from '@mui/material/styles';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';

const TextInput = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: '#fcfcfb',
        },
        '&.Mui-focused': {
            backgroundColor: '#fcfcfb',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 4px`,
            borderColor: theme.palette.primary.main,
        },
    },
}));

export default TextInput;