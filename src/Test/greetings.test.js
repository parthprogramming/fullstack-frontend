import Greet from "../components/greeting.js"
import { render, screen } from '@testing-library/react';

test("test" , ()=>{
    render(<Greet name='Parth'></Greet>)

    const heading  = screen.getByRole('heading',{level:1})
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent("Greeting Component")
})