<div className="grid grid-cols-3 justify-items-center mb-6">
                {currentItems.map((item, idx) => (
                    <OvalCard
                        key={idx}
                        imageUrl={item.imageUrl}
                        title={item.title}
                        subtitle={item.subtitle}
                    />
                ))}
            </div>

            <div className="flex justify-center gap-4">
                <button
                    onClick={() => setPage((p) => Math.max(p - 1, 0))}
                    disabled={page === 0}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Prev
                </button>
                <button
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages - 1))}
                    disabled={page === totalPages - 1}
                    className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
                >
                    Next
                </button>
            </div>