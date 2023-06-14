"use client";
import Form from "@/components/Form/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Authorized from "@/components/Authorized/Authorized";

export default function Home() {
    const [joinedUser, setJoinedUser] = useState(false);
    const name = Cookies.get("user");
    useEffect(() => {
        name ? setJoinedUser(true) : setJoinedUser(false);
    }, []);
    return (
        <Authorized
            joinedUser={joinedUser}
            setJoinedUser={setJoinedUser}
            name={name}
        />
    );
}
