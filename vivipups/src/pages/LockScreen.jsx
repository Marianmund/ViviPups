const numbers = [
    { num: 1 },
    { num: 2 },
    { num: 3 },
    { num: 4 },
    { num: 5 },
    { num: 6 },
    { num: 7 },
    { num: 8 },
    { num: 9 },
    { num: 0 }
];

function Buttons() {
    return (
        <div>
            {numbers.map((number) => (
                <div key={number.num}>
                    <h1>{number.num}</h1>
                </div>
            ))}
        </div>
    );
}

function LockScreen() {
    return (
        <main className="min-h-screen flex items-center justify-center">
            <div>
                <h1 className="text-5xl font-bold text-pink-600">
                    LockScreen
                </h1>
                <Buttons />
            </div>
        </main>
    );
}

export default LockScreen;