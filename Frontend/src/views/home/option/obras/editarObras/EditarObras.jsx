import React, { useEffect } from 'react';
import Layout from "../../../Layout";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getMe } from "../../../auth/Authen"
import EditarObras_cont from './EditarObras_con';

const EditarObras = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isError } = useSelector((state) => state.auth);


    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);


    useEffect(() => {
        if (isError) {
            navigate("/");
        }
    }, [isError, navigate]);

    return (
        <Layout>
            <EditarObras_cont />
        </Layout>
    )
}
export default EditarObras
