import mainCSS from '../../components/common/main.module.css';
import BoardCSS from './Board.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState, useRef } from "react";
import PostTable from '../../components/board/Post';

import{
    callhBoardViewAPI
} from '../../apis/BoardAPICalls'
import NewButton from '../../components/board/NewButton';

function NewPost() {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const boards  = useSelector(state => state.boardReducer);      
    const boardList = boards?.data; 
    console.log('boardManagement', boardList);

    //const pageInfo = boards.pageInfo;

    const [start, setStart] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [pageEnd, setPageEnd] = useState(1);

    // const pageNumber = [];
    // if(pageInfo){
    //     for(let i = 1; i <= pageInfo.pageEnd ; i++){
    //         pageNumber.push(i);
    //     }
    // }

    useEffect(
        () => {
            // setStart((currentPage - 1) * 5);            
            dispatch(callhBoardViewAPI());            
        }
        ,[]
    );

    // 게시글페이지
    const postHandler = (postCode) => {
        navigate(`/board/post/${postCode}`, { replace: false });
    }

    return (
        <>

        <div className={mainCSS.maintitle}>
        <h2>최근 게시글</h2>
        </div>
            
            <NewButton />
                      
            <table className={BoardCSS.bdtable}>
                <PostTable />
                <tbody>
                    { Array.isArray(boardList) && boardList.map((b, index) => (
                        <tr className={BoardCSS.bdtable_tr}
                            key={ b.boardCode }
                            // key={index}
                            onClick={ () => postHandler(b.postCode) }
                        >
                            <td className={BoardCSS.bdtable_td}>{ b.postCode }</td>
                            <td className={BoardCSS.bdtable_td}>{ b.postTitle }</td>
                            <td className={BoardCSS.bdtable_td}>{ b.memberCode }</td>
                            <td className={BoardCSS.bdtable_td}>{ b.postDate }</td>
                            <td className={BoardCSS.bdtable_td}>{ b.postCode }</td>
                        </tr>
                    )) 
                    }
                </tbody>
            </table>         
            
       
            <div className={BoardCSS.pagination}>
            <a href="#">&laquo;</a>
            <a href="#" className={BoardCSS.active}>1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">&raquo;</a>
            </div>


        </>
    );
}

export default NewPost;