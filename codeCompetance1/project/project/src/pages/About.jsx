import React from 'react'

export default function About() {
    return (
        <>
            <div className='container pt-3'>
                <h1 className='text-center'>About Us</h1>
                <div className="d-flex justify-content-center">
                    <img
                        src="/old-trafford.jpg"
                        alt="Img Old Trafford"
                        className="img-fluid"
                    />
                </div>
                <p className='text-justify mt-4'>Old Trafford – often referred to as "The Theatre of Dreams" – is one of the most iconic football stadiums in the world. Located in Greater Manchester, England, it serves as the home ground for Manchester United Football Club. With a seating capacity of over 74,000, it is the largest club football stadium in the UK and has hosted countless legendary matches since its opening in 1910.
                    Renowned for its rich history and electric atmosphere, Old Trafford has witnessed some of the most memorable moments in football. From its classic architecture to the passionate fans filling the stands, the stadium embodies the essence of football culture. Whether you're a lifelong supporter or a first-time visitor, stepping into Old Trafford is an experience like no other, offering a sense of belonging to one of the greatest clubs in the world.</p>
            </div>
        </>
    )
}
