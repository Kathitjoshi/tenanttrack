-- Create a database function to get organizations with member counts in a single query
CREATE OR REPLACE FUNCTION public.get_organizations_with_counts()
RETURNS TABLE (
  id uuid,
  name text,
  slug text,
  logo_url text,
  plan subscription_plan,
  status organization_status,
  primary_color text,
  max_users integer,
  max_projects integer,
  created_at timestamptz,
  updated_at timestamptz,
  member_count bigint
)
LANGUAGE sql
STABLE SECURITY DEFINER
SET search_path TO 'public'
AS $$
  SELECT 
    o.id,
    o.name,
    o.slug,
    o.logo_url,
    o.plan,
    o.status,
    o.primary_color,
    o.max_users,
    o.max_projects,
    o.created_at,
    o.updated_at,
    COALESCE(COUNT(om.id), 0) as member_count
  FROM public.organizations o
  LEFT JOIN public.organization_members om ON o.id = om.organization_id
  WHERE public.is_org_member(o.id)
  GROUP BY o.id
  ORDER BY o.created_at DESC
$$;