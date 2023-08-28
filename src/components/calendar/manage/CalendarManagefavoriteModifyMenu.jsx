import { useLocation } from 'react-router-dom';
import styles from './calendarManagefavoriteModifyMenu.module.css';
import icon from '../../common/meterialIcon.module.css'
import { useContext } from 'react';
import { ManageChkList } from '../../../layouts/FavoriteCalendarLayout';
import { useDispatch } from 'react-redux';
import { deleteFavCalendar, patchFavCalendarStateUpdate, patchFavCalendarUpdate, postFavCalendarRegit } from '../../../apis/FavCalendarAPICalls';
import { MEMBER_CODE } from '../../../apis/APIConfig';

const CalendarManagefavoriteModifyMenu = () => {

    const {pathname} = useLocation();

    const selctSubMenu = pathname.split('/')[pathname.split('/').length-1];

    const {chk, setChk} = useContext(ManageChkList);

    const dispatch = useDispatch();

    const approvalRequest = () => {
        const data = chk.selectList.map(item => ({id:item, approvalStatus: 'APPROVAL'}));
        dispatch(patchFavCalendarStateUpdate({data:data}))
    }

    const rejectRequest = () => {
        const data = [...chk.selectList.map(item => item)]
        dispatch(deleteFavCalendar({data:data}))        
    }

    const approveRequest = () => {
        const data = [...chk.selectList.map(item => ({refCalendar: item, memberCode: parseInt(MEMBER_CODE)}))]
        dispatch(postFavCalendarRegit({data:data}))
    }

    return (
        <div className={styles.container}>

            {selctSubMenu === 'follower'? 
            <button onClick={approvalRequest}>
                <span className={icon.meterialIcon}>edit</span>
                수락
            </button>
            : ''
            }{
                selctSubMenu !== 'public' &&                    
                <button onClick={rejectRequest}>
                    <span className={icon.meterialIcon}>delete</span>
                    삭제{selctSubMenu === 'following' ? '(취소)' :'(거절)'}
                </button>
            }
            {
                selctSubMenu === 'public' &&
                <button onClick={approveRequest}>
                    <span className={icon.meterialIcon}>done</span>
                        승인요청
                </button>
            }
        </div>
        
    );
}


export default CalendarManagefavoriteModifyMenu;