import Link from "next/link";
import React, { useEffect } from "react";
import Form from "../Form/Form";

export default function Authorized({ setJoinedUser, joinedUser, name }) {
    useEffect(() => {
        if (joinedUser) {
            window.location.href = "/user";
        }
    });

    return <>{!joinedUser && <Form setJoinedUser={setJoinedUser} />}</>;
}
