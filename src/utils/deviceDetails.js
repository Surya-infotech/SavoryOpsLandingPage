export const getBrowserAndDeviceDetails = () => {
    const ua = navigator.userAgent;
    let browser = "Unknown Browser";
    let device = "Desktop";
    let os = "Unknown OS";

    // Detect OS
    if (/windows/i.test(ua)) os = "Windows";
    else if (/macintosh|mac os x/i.test(ua)) os = "macOS";
    else if (/android/i.test(ua)) os = "Android";
    else if (/iphone|ipad|ipod/i.test(ua)) os = "iOS";
    else if (/linux/i.test(ua)) os = "Linux";

    // Detect Device Type
    if (/tablet|ipad|playbook|silk/i.test(ua)) {
        device = "Tablet";
    } else if (/mobile|iphone|ipod|android/i.test(ua)) {
        device = `Mobile (${os})`;
    } else {
        device = `Desktop (${os})`;
    }

    // Detect Browser
    if (/chrome|crios/i.test(ua) && !/edge|edg/i.test(ua) && !/opr|opera/i.test(ua)) {
        browser = "Chrome";
    } else if (/safari/i.test(ua) && !/chrome|crios/i.test(ua)) {
        browser = "Safari";
    } else if (/firefox|fxios/i.test(ua)) {
        browser = "Firefox";
    } else if (/edge|edg/i.test(ua)) {
        browser = "Edge";
    } else if (/opr|opera/i.test(ua)) {
        browser = "Opera";
    } else if (/trident/i.test(ua)) {
        browser = "Internet Explorer";
    }

    // Extract browser version
    const browserMatches = ua.match(/(chrome|safari|firefox|edge|edg|opr|opera|version)\/?\s*(\d+)/i) || [];
    const version = browserMatches[2] ? ` v${browserMatches[2]}` : "";

    return {
        browserdetails: `${browser}${version}`,
        device: device
    };
};

export const getIpAndLocation = async () => {
    try {
        const response = await fetch('https://ipapi.co/json/');
        if (response.ok) {
            const data = await response.json();
            return {
                ipaddress: data.ip || 'Unknown',
                location: `${data.city || ''}, ${data.region || ''}, ${data.country_name || ''}`.trim().replace(/^,\s*|,\s*$/g, '') || 'Unknown'
            };
        }
    } catch (error) {
        console.error('Failed to get IP and location via primary API:', error);
    }

    try {
        const response = await fetch('https://ipwho.is/');
        if (response.ok) {
            const data = await response.json();
            if (data.success) {
                return {
                    ipaddress: data.ip || 'Unknown',
                    location: `${data.city || ''}, ${data.region || ''}, ${data.country || ''}`.trim().replace(/^,\s*|,\s*$/g, '') || 'Unknown'
                };
            }
        }
    } catch (error) {
        console.error('Failed to get IP and location via backup API:', error);
    }

    return {
        ipaddress: 'Unknown',
        location: 'Unknown'
    };
};