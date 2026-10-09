import { memo, useState } from 'react';

const Resume = memo(function Resume() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <title>Resume | Louis Pasquier</title>
            <meta name="description" content="Curriculum Vitae / Resume of Louis Pasquier, Software Engineer." />
            {isLoading && <p>Loading resume...</p>}
            <object
                data={'/resume.pdf'}
                type="application/pdf"
                width="100%"
                height="100%"
                onLoad={() => setIsLoading(false)}
                style={{ display: isLoading ? 'none' : 'block' }}
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
            </object>
        </div>
    );
});

export default Resume;