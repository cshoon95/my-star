import { useSelector } from 'react-redux';
import { StoreStateType } from '../type/Type';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function Loading() {
    let { loadingType, loadingOption } = useSelector(
        (state: StoreStateType) => {
            return {
                loadingType: state.view.loadingType,
                loadingOption: state.view.loadingOption
            };
        },
    );

    const style = {
        position: 'absolute',
        top: '60%',
        left: '45%',
    };

    return (
        <>
            {['', 'hide'].includes(loadingType) ? (
                ''
            ) : (
                <Box sx={style}>
                    <CircularProgress
                        color={loadingOption.color}
                        disableShrink={loadingOption.disableShrink}
                        size={loadingOption.size}
                        thickness={loadingOption.thickness}
                    />
                </Box>
            )}
        </>
    );
}

export default Loading;
