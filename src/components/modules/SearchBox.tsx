import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import { InputBase, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AvatarCustom } from '../layout/Appbar';

const PaperCustom = styled(Paper)`
background : ${props => props.theme.palette.bg.dark}  ;

${props => props.theme.breakpoints.down("md")}{
    background : ${props => props.theme.palette.bg.dark} !important ;
}

height : 51px;
padding : 5px 10px;
display : flex;
align-items : center;
border-radius : 8px;
box-shadow : none;
border : 1px solid ${props => props.theme.palette.mode === "dark" ? "transparent" : "black"};
:hover {
  border : 1px solid ${props => props.theme.palette.mode === "dark" ? "white" : "black"};
}
`


const SearchBox = () => {
    return (
        <PaperCustom className='searchBox'>

            <SearchIcon sx={{ width: "16px", height: "16px", margin: "0 10px" }} />

            <InputBase
                sx={{ ml: 1, flex: 1, fontSize: "14px" }}
                placeholder="Search Google Maps"
                inputProps={{ 'aria-label': 'search google maps' }}
            />
            <AvatarCustom sx={{ p: '10px' }} >
                <CategoryIcon />
            </AvatarCustom>

        </PaperCustom>
    )
}

export default SearchBox