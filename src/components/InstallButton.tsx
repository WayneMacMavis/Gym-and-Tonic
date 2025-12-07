import { useEffect, useState } from 'react';

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault(); // prevent auto-prompt
      setDeferredPrompt(e); // save the event
      setShowButton(true);  // show our custom button
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => window.removeEventListener('beforeinstallprompt', handler);
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt(); // show the browser install dialog
    const choiceResult = await deferredPrompt.userChoice;
    console.log('User choice:', choiceResult.outcome);
    setDeferredPrompt(null); // clear after use
    setShowButton(false);    // hide button
  };

  if (!showButton) return null;

  return (
    <button className="button install-btn" onClick={handleInstallClick}>
      📥 Install GymApp
    </button>
  );
}