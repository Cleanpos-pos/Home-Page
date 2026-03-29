"use client";

import { useEffect } from "react";

export default function GlobalError({
              error,
              reset,
}: {
              error: Error & { digest?: string };
              reset: () => void;
}) {
              useEffect(() => {
                            const isChunkLoadError =
                                          error?.name === 'ChunkLoadError' ||
                                          (error?.message && error.message.includes('Loading chunk')) ||
                                          (error?.message && error.message.includes('Failed to load resource'));

                            if (isChunkLoadError) {
                                          window.location.reload();
                            } else {
                                          console.error("Global Error:", error);
                            }
              }, [error]);

              return (
                            <html lang="en">
                                          <body>
                                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', fontFamily: 'sans-serif', padding: '2rem', textAlign: 'center' }}>
                                                                      <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Hang tight! We've just updated.</h2>
                                                                      <p style={{ color: '#4b5563', marginBottom: '2rem', maxWidth: '400px' }}>
                                                                                    It looks like we deployed a new version of the site while you had this page open.
                                                                                    Please refresh the page to get the latest update.
                                                                      </p>
                                                                      <button
                                                                                    onClick={() => window.location.reload()}
                                                                                    style={{ padding: '0.5rem 1.5rem', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: '500' }}
                                                                      >
                                                                                    Refresh Page
                                                                      </button>
                                                        </div>
                                          </body>
                            </html>
              );
}
