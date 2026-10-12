'use client'
import React, { useEffect, useState } from 'react'
import ComponentDetails from './ComponentDetails'

const PostPreview = ({ file, componentSlug, title }: { title: string; file: string, componentSlug: string }) => {
  const [code, setCode] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true;
    
    async function fetchCode() {
      try {
        setIsLoading(true);
        const fetchResponse = await fetch(`/components/${componentSlug}/${file}`);
        
        if (!fetchResponse.ok) {
          throw new Error(`Failed to fetch component: ${fetchResponse.statusText}`);
        }
        
        const textResponse = await fetchResponse.text();
        
        if (isMounted) {
          setCode(textResponse);
          setError(null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'An error occurred');
          console.error(`Error fetching component ${componentSlug}/${file}:`, err);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchCode();

    return () => {
      isMounted = false;
    };
  }, [file, componentSlug]); // Only re-fetch when file or componentSlug changes

  if (error) {
    return (
      <div className="p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
        <p className="text-red-700 dark:text-red-400">Erreur lors du chargement du composant: {error}</p>
      </div>
    );
  }

  return (
    <ComponentDetails code={code} title={title} isLoading={isLoading} />
  )
}

export default PostPreview
