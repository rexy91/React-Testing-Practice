// Tesing the counter component.
import React from 'react'
import Counter from '../Counter'

// Every time the test suite is ran, component will be rendered on the virtual DOM. Then the test cases will be based on the virtual DOM
import { render, fireEvent} from '@testing-library/react'
import "@testing-library/jest-dom/extend-expect"

// 1st Argument is a string, description. 
// 2nd Argument is the callback of the actual test code 
test("Header randers with correct test", () => {
    const { getByTestId } = render(<Counter />) // Now it's rendered in the Virtual DOM 
    const headerElement = getByTestId("counter-header") // Assigned data-testid to the element, and grab it here. 

    // Assertion of test, with expect keyword
    expect(headerElement.textContent).toBe("My Counter") 
})

// Test-Driven-Development, we write the test first.
test("Counter starts with text of 0", () => {
    const { getByTestId } = render(<Counter />)
    const counterElement = getByTestId("counter")

    expect(counterElement.textContent).toBe("0") 
})

test("Input box contains initial value of 1", () => {
    const { getByTestId } = render(<Counter />)
    const inputElement = getByTestId("input")

    // Here is value, because input contains value not textContent
    expect(inputElement.value).toBe("1") 
})

test("add button renders with + ", () => {
    const { getByTestId } = render(<Counter />)
    const addBtn = getByTestId("add-btn")
    expect(addBtn.textContent).toBe("+") 
})

test("add button renders with - ", () => {
    const { getByTestId } = render(<Counter />)
    const subtractBtn = getByTestId("sub-btn")
    expect(subtractBtn.textContent).toBe("-") 
})

// Testing Functionalies with fireEvents

// Testing that the input value can be changed. 
test("Changing value of input works correctly", () => {
    const { getByTestId } = render(<Counter />)
    const inputElement = getByTestId("input")
    expect(inputElement.value).toBe("1")  // We can have multiple expect statements 

    // We expect the onchange event to be triggered
    fireEvent.change(inputElement, {
        target: {
            value: "5" // If able to change to 5, means the input changing is working. 
        }
    })
    expect(inputElement.value).toBe("5") 
})

// Testing the add functionality

test("Click on plus btn adds 1 value to counter", ()=> {
    const { getByTestId } = render(<Counter />)
    const btnEl = getByTestId("add-btn")
    const counterEl = getByTestId("counter")
    fireEvent.click(btnEl) // Fires the event
    
    expect(counterEl.textContent).toBe("1")
    
})