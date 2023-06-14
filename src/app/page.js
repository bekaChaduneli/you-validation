"use client";
import Form from "@/components/Form/Form";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Home() {
    const [joinedUser, setJoinedUser] = useState(false);
    const name = Cookies.get("user");
    useEffect(() => {
        name ? setJoinedUser(true) : setJoinedUser(false);
    }, []);
    return (
        <>
            {joinedUser ? (
                <>შესული ხარ</>
            ) : (
                <Form setJoinedUser={setJoinedUser} />
            )}
        </>
    );
}
