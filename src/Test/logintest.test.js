import Login from "../../src/components/sampleComponent.jsx"
import { getByPlaceholderText, render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"
import { MemoryRouter } from "react-router-dom";


test.skip(">>>>>>>>>testing sample Login<<<<<<<<<" , async ()=>{

    
    render(
    
       <Login/> 
    
    )

    const InputField = getByPlaceholderText("enter the username")
    await userEvent.type(InputField,"react")

    await userEvent.click(screen.getByRole("Submit"))


    const result = screen.getByText("Hello , react")
    expect(result).toBeInTheDocument()
})