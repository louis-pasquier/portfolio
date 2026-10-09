import { memo } from 'react';

const Resume = memo(function Resume() {
    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <title>Resume | Louis Pasquier</title>
            <meta name="description" content="Curriculum Vitae / Resume of Louis Pasquier, Software Engineer." />
            <iframe
                src="/resume.pdf"
                title="Resume - Louis Pasquier"
                style={{ width: '100%', height: '100%', border: 'none' }}
            >
                <div style={{ padding: '2rem', textAlign: 'center' }}>
                    <p>My resume</p>
                    <p>
                        Your browser does not support embedded PDFs. You can{' '}
                        <a href="/resume.pdf" download style={{ color: '#6366f1', textDecoration: 'underline' }}>
                            download the PDF resume here
                        </a>.
                    </p>
                </div>
            </iframe>
        </div>
    );
});

export default Resume;