import { useState, useEffect } from 'react';
import '../css/Quotes.css';

function Quotes() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorText, setErrorText] = useState('');

  const fetchData = async () => {
    const category = 'life';
    const apiKey = 'hAmrsWWE0bgL+Mraw4IZGA==XcYiatLVW4Powktr';
    const url = `https://api.api-ninjas.com/v1/quotes?/category=${category}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Error loading quote...');
      }

      const jsonData = await response.json();
      setData(jsonData[0]);
    } catch (error) {
      setError(true);

      setErrorText();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="Quote">
        <p className="quote">Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="Quote">
        <p className="quote error">
          Error loading quote...
          {' '}
          {errorText}
        </p>
      </div>
    );
  }

  return (
    <div className="quote-box">
      <h3 className="quote-heading">Quote</h3>
      <p className="quote">{data.quote}</p>
      <p className="author">
        {' '}
        ...
        {' '}
        {data.author}
      </p>
    </div>
  );
}

export default Quotes;
