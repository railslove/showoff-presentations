!SLIDE

## Extensive access control

!SLIDE

## Extensive access control

1. Caching
2.
3.
4.

!SLIDE

## Extensive access control

1. Caching
2. Caching
3.
4.
!SLIDE

## Extensive access control

1. Caching
2. Caching
3. Caching
4.

!SLIDE

## Extensive access control

1. Caching
2. Caching
3. Caching
4. Testing!

!SLIDE

    @@@ruby
    def add_permissions
      add_perms 1, current_company_permissions
      add_perms 2, current_token_permissions
      if current_user
        add_perms 3, current_team_permissions
        add_perms 3, current_user_permissions
      end
    end

    def set_team_ids
      @team_ids ||=
        current_user.team_ids_in_current_company
    end

    def user_has_exclusive_rights_on_the_action?
      u = KingAuth::Guard.new
      u.add_permissions 1, current_company_permissions
      u.add_permissions 2, current_token_permissions
      u.add_permissions 3, current_user_permissions
      u.check(action_name, self.class.controller_path)
      # the above returns true/false
    end

!SLIDE

## Extensive access control

1. Caching user and team permissions
2. Caching team IDs
3. Caching exclusive user permissions
4. Testing with NewRelic

!SLIDE

## Extensive access control

### The result of such caching:

### Before: avg. response time: **4s**

!SLIDE

## Extensive access control

### The result of such caching:

### After: avg. response time: **0.7s**

