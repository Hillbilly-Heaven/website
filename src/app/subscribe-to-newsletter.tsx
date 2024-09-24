/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */

import styles from './subscribe-to-newsletter.module.css';
import { useState } from "react";

export default function SubscribeToNewsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState(''); // Track success/error state
  
    const subscribe = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent page reload
      setStatus('loading'); // Start loading
  
      try {
        const res = await fetch('/api/subscribe', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
  
        if (res.ok) {
          setStatus('success');
          setEmail(''); // Clear email input
        } else {
          setStatus('error');
        }
      } catch (error) {
        console.error('Error subscribing:', error);
        setStatus('error');
      }
    };
  
    return (
      <div>
        <div className={styles.subscribeHeader}>Subscribe to our newsletter</div>
        <form onSubmit={subscribe} className={styles.form}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={styles.input}
          />
          <div className={styles.buttonWrapper}>
            <button type="submit" disabled={status === 'loading'} className={styles.button}>
              {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
            </button>
          </div>
        </form>
  
        {status === 'success' && <p>Thank you for subscribing!</p>}
        {status === 'error' && <p>Sorry, something went wrong. Please try again.</p>}
      </div>
    );
  }