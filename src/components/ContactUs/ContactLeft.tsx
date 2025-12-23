import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactLeft() {
  return (
    <div className="max-w-md">
      <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
      <p className="text-gray-600 mb-8">
        I'm a paragraph. Click here to add your own text and edit me.
      </p>

      <div className="space-y-6">
        <InfoItem
          icon={<Phone size={20} />}
          title="Phone"
          value="+9471 222 9922"
        />
        <InfoItem
          icon={<Mail size={20} />}
          title="Email"
          value="infomitlcampus@gmail.com"
        />
        <InfoItem
          icon={<MapPin size={20} />}
          title="Address"
          value="No 1/440, Lake Road, Boralesgamuwa"
        />
      </div>
    </div>
  );
}

function InfoItem({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
        {icon}
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-gray-600 text-sm">{value}</p>
      </div>
    </div>
  );
}
