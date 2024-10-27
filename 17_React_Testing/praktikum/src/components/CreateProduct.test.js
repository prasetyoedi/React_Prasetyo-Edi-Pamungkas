import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CreateProduct from './CreateProduct';

test('form input Product Name dapat menerima input teks dan menampilkannya di halaman', () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);

    const input = getByLabelText(/product name/i);
    fireEvent.change(input, { target: { value: 'Test Product' } });

    expect(input.value).toBe('Test Product');
    expect(getByText('Test Product')).toBeInTheDocument();
});

test('form input Category dapat menerima pilihan dan menampilkannya di halaman', () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);

    const select = getByLabelText(/category/i);
    fireEvent.change(select, { target: { value: 'Electronics' } });

    expect(select.value).toBe('Electronics');
    expect(getByText('Electronics')).toBeInTheDocument();
});

test('form input Price dapat menerima input angka dan menampilkannya di halaman', () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);

    const input = getByLabelText(/price/i);
    fireEvent.change(input, { target: { value: '100' } });

    expect(input.value).toBe('100');
    expect(getByText('100')).toBeInTheDocument();
});

test('form input Description dapat menerima input teks dan menampilkannya di halaman', () => {
    const { getByLabelText, getByText } = render(<CreateProduct />);

    const input = getByLabelText(/description/i);
    fireEvent.change(input, { target: { value: 'This is a test product' } });

    expect(input.value).toBe('This is a test product');
    expect(getByText('This is a test product')).toBeInTheDocument();
});

test('form input Product Name tidak boleh kosong', () => {
    const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

    const input = getByLabelText(/product name/i);
    fireEvent.change(input, { target: { value: '' } });

    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(getByText(/product name is required/i)).toBeInTheDocument();
});

test('form input Product Name tidak boleh mengandung karakter @/#{}', () => {
    const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

    const input = getByLabelText(/product name/i);
    fireEvent.change(input, { target: { value: 'Invalid@Name' } });

    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(getByText(/product name cannot contain special characters/i)).toBeInTheDocument();
});

test('form input Product Name tidak boleh melebihi 25 karakter', () => {
    const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

    const input = getByLabelText(/product name/i);
    fireEvent.change(input, { target: { value: 'ThisProductNameIsWayTooLong' } });

    const submitButton = getByRole('button', { name: /submit/i });
    fireEvent.click(submitButton);

    expect(getByText(/product name must not exceed 25 characters/i)).toBeInTheDocument();
    test('form input Category tidak boleh kosong', () => {
        const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

        const select = getByLabelText(/category/i);
        fireEvent.change(select, { target: { value: '' } });

        const submitButton = getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(getByText(/category is required/i)).toBeInTheDocument();
    });

    test('form input Price tidak boleh kosong', () => {
        const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

        const input = getByLabelText(/price/i);
        fireEvent.change(input, { target: { value: '' } });

        const submitButton = getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(getByText(/price is required/i)).toBeInTheDocument();
    });

    test('form input Description tidak boleh kosong', () => {
        const { getByLabelText, getByText, getByRole } = render(<CreateProduct />);

        const input = getByLabelText(/description/i);
        fireEvent.change(input, { target: { value: '' } });

        const submitButton = getByRole('button', { name: /submit/i });
        fireEvent.click(submitButton);

        expect(getByText(/description is required/i)).toBeInTheDocument();
    });
});