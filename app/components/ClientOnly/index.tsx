import React, { Fragment, useEffect, useState } from 'react';

interface ClientOnlyProps {
  children: React.ReactNode;
}

export default function ClientOnly({
  children,
  ...delegated
}: ClientOnlyProps) {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <Fragment {...delegated}>{children}</Fragment>;
}
