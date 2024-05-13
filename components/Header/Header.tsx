import React, { useContext } from 'react';
import logoImg from '../../src/images/logo.svg';
import { UserContext } from '../../contexts/UserContext';
import Profile from '../Profile/Profile';
import * as S from './Header.styled';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Header() {
  const { user } = useContext(UserContext);
  const router = useRouter();

  const $isSticky = router.pathname !== '/folder';

  return (
    <S.Header $isSticky={$isSticky}>
      <S.Inner>
        <S.Logo>
          <Link href='/'>
            <Image src={logoImg} alt='linkbrary logo' />
          </Link>
        </S.Logo>
        {!user && <S.StyledButton link='/signin.html' text='로그인' />}
        {user && (
          <Profile user={user.email} src={user.image_source} $size='s' />
        )}
      </S.Inner>
    </S.Header>
  );
}