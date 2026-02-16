🛍️ E-Commerce App – Exploring Data Fetching in React
About This Project

This project is a simple e-commerce application built using React.

But the main purpose of building this wasn’t just to show products — it was to understand how data fetching and state management can evolve in a React app.

I built this project step by step, starting from basic Redux and gradually moving towards React Query to understand how modern data handling works in real-world applications.

Tech Stack

React (Vite)

Tailwind CSS

Redux Toolkit

Redux Thunk

React Query

DummyJSON API (for product data)

What This App Does

Displays products from an API

Allows adding products to cart

Handles authentication

Protects certain routes

Demonstrates different data fetching approaches

How the Project Evolved

Instead of directly using React Query, I intentionally built this in stages to understand each concept properly.

Stage 1 – Basic Redux

I started with a simple Redux setup to fetch products and store them in global state.
Handled loading and error states manually.

This helped me understand how Redux works at a basic level.

Stage 2 – Redux Thunk

Next, I introduced createAsyncThunk to manage async API calls in a cleaner way.

This improved the structure of the code and separated async logic from UI components.

Stage 3 – Data Normalization

Then I added normalizr to flatten nested API data.

This helped in organizing state better and understanding how normalized data improves performance and scalability.

Stage 4 – React Query (Final Version)

Finally, I migrated product fetching to React Query.

This reduced a lot of manual work like:

Managing loading states

Handling caching manually

Preventing duplicate API calls

React Query automatically handles caching and background updates, which made the code much cleaner.

Cart state is still managed using Redux because that is client-side state, while product data is handled by React Query as server-side state.

This helped me clearly understand the difference between client state and server state.