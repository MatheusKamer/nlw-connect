interface ButtonProps {
  label?: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {label || 'Enviar'}
    </button>
  );
}
