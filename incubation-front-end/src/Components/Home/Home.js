import React from 'react';
import './Home.css';

export default function Home() {

    return (
        <div>
            <div className="home p-5">
                <div class="card text-center p-5">
                    <div class="card-header">
                        Featured
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Special title treatment</h5>
                        <img src={'./gaa.png'}></img>
                        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                    </div>
                    <div class="card-footer text-muted">
                        2 days ago
                    </div>
                </div>
            </div>
        </div>
    );
}
