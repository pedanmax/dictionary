/* eslint-disable max-len */
import { useForm, Controller } from 'react-hook-form';
import {
  Button, FormControl, Stack, TextField,
} from '@mui/material';
import './Form.scss';

const Form = () => {
  const {
    handleSubmit, reset, control, formState: { errors },
  } = useForm({
    defaultValues: {
      word: '',
      translateWord: '',
      group: '',
    },
  });
  const onSubmit = (data: { word: string, translateWord: string, group: string }) => {
    reset({
      word: '',
      translateWord: '',
      group: '',
    });
    console.log(data);
    console.log(errors);
  };
  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <Stack spacing={4} direction={{ md: 'row' }}>
        <FormControl sx={{ flex: { sm: '1 1 auto', md: '0 1 316px' }, marginBottom: '20px' }}>
          <Controller
            control={control}
            name='word'
            defaultValue=''
            rules={{
              required: {
                value: true,
                message: 'Field is required',
              },
              validate: (value) => !!value.match(/^[^\s]+(?:$|.*[^\s]+$)/) || 'value cant start/end or contain only white spacing',
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                autoComplete='off'
                type='text'
                name='word'
                label='Word'
                variant="standard"
                error={Boolean(errors.word)}
                inputRef={ref}
                helperText={errors.word?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ flex: { sm: '1 1 auto', md: '0 1 316px' }, marginBottom: '20px' }}>
          <Controller
            control={control}
            name='translateWord'
            defaultValue=''
            rules={{
              required: {
                value: true,
                message: 'Field is required',
              },
              validate: (value) => !!value.match(/^[^\s]+(?:$|.*[^\s]+$)/) || 'value cant start/end or contain only white spacing',
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                autoComplete='off'
                type='text'
                name='translate'
                label='Translate'
                variant="standard"
                error={Boolean(errors.translateWord)}
                inputRef={ref}
                helperText={errors.translateWord?.message}
              />
            )}
          />
        </FormControl>
        <FormControl sx={{ flex: { sm: '1 1 auto', md: '0 1 316px' }, marginBottom: '20px' }}>
          <Controller
            control={control}
            name='group'
            defaultValue=''
            rules={{
              required: {
                value: true,
                message: 'Field is required',
              },
              validate: (value) => !!value.match(/^[^\s]+(?:$|.*[^\s]+$)/) || 'value cant start/end or contain only white spacing',
            }}
            render={({ field: { ref, ...field } }) => (
              <TextField
                {...field}
                autoComplete='off'
                type='text'
                name='group'
                label='Group'
                variant="standard"
                error={Boolean(errors.group)}
                inputRef={ref}
                helperText={errors.group?.message}
              />
            )}
          />
        </FormControl>
        <Button
          sx={{ minWidth: '120px', height: '50px' }}
          type='submit'
          variant="contained"
          onClick={() => console.log(errors)}
        >
          Add word
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
