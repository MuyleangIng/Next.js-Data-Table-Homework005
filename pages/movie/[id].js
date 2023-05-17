import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { API_KEY, BASE_URL, IMAGE_BASE_PATH } from "@/lib";
import { Button, Card, Col,  Modal, Row } from 'react-bootstrap';
export default function Movie() {
    const router = useRouter();
    console.log(router.query);

    const [id, setId] = useState(router.query.id)
    const [movie, setMovie] = useState({});
    const [video,setVideo]=useState()

    useEffect(() => {
        fetch(BASE_URL + `/movie/${id}?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data fetch from movie', data)
                setMovie(data)
            })
        fetch(BASE_URL + `/movie/${id}/videos?api_key=${API_KEY}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('data fetch from movie', data)
                const video=data.results[0].key;
                setVideo(video)
            })
    }, []);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>

            <Row className='container m-5 border-1 justify-content-center'>
                <Col sm={5}>
                    <Card.Img variant="top" style={{ borderRadius: "15px" }} src={movie.backdrop_path ? IMAGE_BASE_PATH + movie.backdrop_path : "https://raw.githubusercontent.com/julien-gargot/images-placeholder/master/placeholder-portrait.png"} />
                </Col>
                <Col sm={7}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{movie.title ? movie.title : "Title"}</Card.Title>
                            <Card.Text>
                                {movie.overview ? movie.overview : " OverView "}
                            </Card.Text>
                            <Button type="button" className="btn btn-primary" onClick={handleShow}>View Details</Button>

                            <Modal size={"xl"} centered show={show} onHide={handleClose}>
                                    <Modal.Body  className="p-0">

                                        <div className="ratio ratio-16x9">
                                            <iframe src={`https://www.youtube.com/embed/${video}`}
                                                    title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </Modal.Body>
                            </Modal>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    )
}
