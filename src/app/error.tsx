"use client";

import { useEffect } from "react";

export default function Error({
              error,
              reset,
}: {
              error: Error & { digest?: string };
              reset: () => void;
}) {
              useEffect(() => {
                            // Check if the error is related to chunk loading or missing resources after a deploy
                            const isChunkLoadError =
                                          error?.name === 'ChunkLoadError' ||
                                          (error?.message && error.message.includes('Loading chunk')) ||
                                          (error?.message && error.message.includes('dt dynamically imported module')) ||
                                          (error?.message && error.message.includes('Failed to load resource'));

                            if (isChunkLoadError) {
                                          // Hard reload to fetch the new HTML and correct chunks
                                          window.location.reload();
                            } else {
                                          // Log the error to an error reporting service
                                          console.error(error);
                            }
              }, [error]);

              return (
                            <div className="flex flex-col items-center justify-center min-h-[50vh] p-8 text-center font-sans">
                                          <h2 className="text-2xl font-bold mb-4 text-gray-800">Hang tight! We've just updated.</h2>
                                          <p className="text-gray-600 mb-8 max-w-md mx-auto">
                                                        It looks like we deployed a new version of the site while you had this page open.
                                                        Please refresh the page to get the latest update.
                                          </p>
                                          <button
                                                        onClick={() => window.location.reload()}
                                                        className="px-6 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 transition font-medium"
                                          >
                                                        Refresh Page
                                          </button>
                            </div>
              );
}
