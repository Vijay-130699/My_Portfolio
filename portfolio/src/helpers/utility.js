export function renderInnerWidth() {
    const innerWidth = window.innerWidth;
    if (innerWidth > 768) {
        return true;
    } else {
        return false;
    }

}

export const downloadResume = () => {
    fetch('/My_Resume.pdf') // Adjust the path if needed
        .then(response => response.blob())
        .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'My_Resume.pdf'; // The name of the downloaded file
            document.body.appendChild(a);
            a.click();
            a.remove();
        })
        .catch(error => console.error('Error downloading the file:', error));
};