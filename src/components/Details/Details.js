import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Details.css";
import Right from "../../assets/img/right.png";
import { watchContext } from "../../contexts/WatchContext";
import Delete from "../../assets/img/delete.png";
import Edit from "../../assets/img/edit.png";

const Details = (props) => {
    const { getWatchDetails, watchDetails, saveWatch } =
        useContext(watchContext);
    const [editStatus, setEditStatus] = useState(false);
    const [editedWatch, setEditedWatch] = useState({});

    const history = useHistory();
    const handleValue = (e) => {
        let newWatch = {
            ...editedWatch,
            [e.target.name]: e.target.value,
        };
        setEditedWatch(newWatch);
    };
    const handleSave = () => {
        saveWatch(props.match.params.id, editedWatch);
        setEditedWatch(false);
        history.push("/");
    };

    useEffect(() => {
        getWatchDetails(props.match.params.id);
    }, []);
    return (
        <>
            <div className="container">
                <div className="det_wrapper">
                    {editStatus ? (
                        <div className="edit-textareas">
                            <textarea name="name" onChange={handleValue}>
                                {watchDetails.name}
                            </textarea>
                            <textarea name="model" onChange={handleValue}>
                                {watchDetails.model}
                            </textarea>
                            <textarea name="img" onChange={handleValue}>
                                {watchDetails.img}
                            </textarea>
                            <textarea name="price" onChange={handleValue}>
                                {watchDetails.price}
                            </textarea>
                            <textarea name="SecondImg" onChange={handleValue}>
                                {watchDetails.SecondImg}
                            </textarea>
                            <textarea name="ThirtyImg" onChange={handleValue}>
                                {watchDetails.ThirtyImg}
                            </textarea>
                            <textarea name="FortyImg" onChange={handleValue}>
                                {watchDetails.FortyImg}
                            </textarea>
                            <textarea name="FiftyImg" onChange={handleValue}>
                                {watchDetails.FiftyImg}
                            </textarea>
                            <textarea name="SixtyImg" onChange={handleValue}>
                                {watchDetails.SixtyImg}
                            </textarea>
                        </div>
                    ) : (
                        <>
                            <div className="det_title">
                                <p>
                                    <Link to="/">Главная</Link>
                                </p>
                                <img className="icon_right" src={Right} />
                                <p className="det_name">
                                    {watchDetails.name} {watchDetails.model}
                                </p>
                            </div>
                            <div className="det_welcome">
                                <div className="det_left">
                                    <img src={watchDetails.img} />
                                </div>
                                <div className="det_right">
                                    <p>Артикул: {watchDetails.id}</p>
                                    <p className="det_brand">
                                        {watchDetails.name} {watchDetails.model}
                                    </p>
                                    <p className="det_price">
                                        {watchDetails.price} сом
                                    </p>
                                    <button className="btn-det">Купить</button>
                                    <p>Swiss Made</p>
                                </div>
                            </div>
                            <div className="det_images">
                                <img
                                    className="det_img"
                                    src={watchDetails.SecondImg}
                                />
                                <img
                                    className="det_img"
                                    src={watchDetails.ThirtyImg}
                                />
                                <img
                                    className="det_img"
                                    src={watchDetails.FortyImg}
                                />
                                <img
                                    className="det_img"
                                    src={watchDetails.FiftyImg}
                                />
                                <img
                                    className="det_img"
                                    src={watchDetails.SixtyImg}
                                />
                            </div>
                        </>
                    )}
                </div>
                {editStatus ? (
                    <button onClick={handleSave}>Сохранить</button>
                ) : (
                    <div className="icon_det">
                        <img
                            onClick={() => setEditStatus(true)}
                            className="icon_deteils"
                            src={Edit}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default Details;
