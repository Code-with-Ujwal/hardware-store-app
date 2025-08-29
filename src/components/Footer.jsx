import { Facebook, Linkedin, X, Youtube } from 'lucide-react';


export default function Footer() {
return (
<footer className="px-4 pb-6 pt-4 text-center bg-white">
<p className="text-sm text-slate-600">
© Wire Hardware Store || All rights reserved || 444-131-1121 || Privacy
</p>
<div className="flex justify-center gap-4 mt-2 text-sm">
<a href="#" className="footer-link">Shipping</a>
<a href="#" className="footer-link">Returns</a>
<a href="#" className="footer-link">Terms and Conditions</a>
</div>
<div className="flex justify-center gap-5 mt-4">
<a href="#" className="icon-btn" aria-label="YouTube"><Youtube className="w-6 h-6" /></a>
<a href="#" className="icon-btn" aria-label="X"><X className="w-6 h-6" /></a>
<a href="#" className="icon-btn" aria-label="LinkedIn"><Linkedin className="w-6 h-6" /></a>
<a href="#" className="icon-btn" aria-label="Facebook"><Facebook className="w-6 h-6" /></a>
</div>
</footer>
);
}