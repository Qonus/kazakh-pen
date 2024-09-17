'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import styles from "./ClietnProfile.module.scss"
import Image from 'next/image';

export default function ClientProfile() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    user && (
      <div className={styles.profile}>
            <img src={String(user.picture)} alt={String(user.name)}/>
            <h2>{user.name}</h2>
            <p>{user.email}</p>
      </div>
    )
  );
}