import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import SingleCourseView from "../../components/Course/SingleCourseView";
import { Context } from "../../context";

const CourseView = ({ course_data }) => {
    const { state, dispatch } = useContext(Context);
    const { user } = state;
    const router = useRouter();
    return (
        <>
            <SingleCourseView
                course={course_data}
                user={user}
                router={router}
                dispatch={dispatch}
            />
        </>
    );
};

export async function getServerSideProps(ctx) {
    const { data } = await axios.get(
        `${process.env.API}/user/courses/${ctx.query.slug}`
    );
    return {
        props: {
            course_data: data.course,
        },
    };
}
export default CourseView;
