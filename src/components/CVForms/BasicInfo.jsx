import React, { Component } from 'react'
import "./forms.css"

export default function BasicInfo({
    onFirstName,
    onLastName,
    onLocation,
    onEmail,
    onPhone,
    onTitle,
}) {
    return (
        <>
            <div className="basic-info">
                <h1>Basic Information</h1>
                <input type='text' placeholder='First Name' onChange={onFirstName} name='firstName' />
                <input type='text' placeholder='Last Name' onChange={onLastName} name='lastName' />
                <input type='text' placeholder='City' onChange={onLocation} name='location' />
                <input type='email' placeholder='Email' onChange={onEmail} name="email" />        
                <input type='tel' placeholder='Phone number' onChange={onPhone} name="phone" />          
                <input type='text' placeholder='Job title' onChange={onTitle} />
            </div>
        </>
    )
}
