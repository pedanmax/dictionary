import { useForm, Controller } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button, FormControl, Stack, TextField,
} from '@mui/material';
import { WordType, SubmitType, StoreType } from '../../types/types';
import { actions } from '../../Redux/reducers/words.slice';
import './Form.scss';

const Form = () => {
  const dispatch = useDispatch();
  const {
    handleSubmit, reset, control, formState: { errors },
  } = useForm({
    defaultValues: {
      word: '',
      translateWord: '',
      group: '',
    },
  });
  const onSubmit = (data: SubmitType) => {
    reset({
      word: '',
      translateWord: '',
      group: '',
    });
    const id = Math.floor(Math.random() * 1000);
    const word:WordType = { ...data, id };
    dispatch(actions.addWord(word));
  };
  const words = useSelector((state:StoreType) => state.words);

  console.log(words);
  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      style={{ marginBottom: '20px' }}
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
          sx={{ minWidth: '120px', height: '50px', '&.MuiButton-root:hover': { backgroundColor: '#004668' } }}
          type='submit'
          variant="contained"
        >
          Add word
        </Button>
      </Stack>
    </form>
  );
};

export default Form;
