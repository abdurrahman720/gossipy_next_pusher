"use client"
import React from 'react';
import Button from '../Components/Button';
import { signOut } from 'next-auth/react';

const page = () => {
    return (
        <Button onClick={()=>signOut()}>
            Logout
        </Button>
    );
};

export default page;