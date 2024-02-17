import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const apiKey = 'YOUR_BING_SEARCH_API_KEY'; // Replace with your Bing Search API key
    const endpoint = 'https://api.cognitive.microsoft.com/bing/v7.0/search';

    try {
      const response = await axios.get(endpoint, {
        params: {
          q: query,
          count: 10, // You can adjust the number of results
          offset: 0,
          mkt: 'en-US',
        },
        headers: {
          'Ocp-Apim-Subscription-Key': apiKey,
        },
      });

      setResults(response.data.webPages.value);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

  return (
    <div>
      <h1>Bing Search App</h1>
      <div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter your search query"
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        <h2>Search Results:</h2>
        <ul>
          {results.map((result) => (
            <li key={result.id}>
              <a href={result.url} target="_blank" rel="noopener noreferrer">
                {result.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
