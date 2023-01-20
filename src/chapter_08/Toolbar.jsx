import React from 'react';
import * as _ from './Toolstyle' 

const styles = {
    gretting: {
        marginRight: 8,
    }
};

function Toolbar(props) {
    const { isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <_.Wrapper>
            {isLoggedIn && <span style={styles.gretting}>환영합니다!</span>}
            {isLoggedIn ? (
                <button onClick={onClickLogout}>로그아웃</button>
            ) : (
                <button onClick={onClickLogin}>로그인</button>
            )} 
        </_.Wrapper>
    );
}

export default Toolbar;