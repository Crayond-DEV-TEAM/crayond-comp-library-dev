import Box from '@mui/material/Box';
 
export default function Action(props: any) {
  const { Celldata, val } = props;

  const actions = (key: string) => {
    switch (key) {
      case 'EDIT_WITH_DELETE':
        return (
          <>
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => val?.editHandel(Celldata?.id)}
            >
              {val?.editIcon}
            </Box>
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={() => val?.deleteHandel(Celldata?.id)}
            >
              {val?.deleteIcon}
            </Box>
          </>
        );

      case 'EDIT':
        return (
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => val?.editHandel(Celldata?.id)}
          >
            {val?.editIcon}
          </Box>
        );
      case 'DELETE':
        return (
          <Box
            sx={{ cursor: 'pointer' }}
            onClick={() => val?.deleteHandel(Celldata?.id)}
          >
            {val?.deleteIcon}
          </Box>
        );

      default:
        break;
    }
  };
  return (
    <Box
      display={'flex'}
      alignItems={'center'}
      justifyContent={'center'}
      gap={'14px'}
    >
      {actions(val?.variant)}
    </Box>
  );
}

Action.defaultProps = {
  Celldata: {},
  val: {},
};
