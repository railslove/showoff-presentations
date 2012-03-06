!SLIDE

## Extensive access control

!SLIDE full-page-image

<img src="/image/before_improvements/Roles.png" width="950" />

!SLIDE full-page-image

<img src="/image/before_improvements/Teams.png" width="950"/>

!SLIDE full-page-image

<img src="/image/before_improvements/schema.png" />

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

    @@@c
    [-] SalesKing
     |-[-] application
     |  |- Access code base
     |     of controllers
     |     The only place where
     |     we can add the actual
     |     permission levels
     |-[-] libs
     |  |- A library with
     |     all levels of access
     |     defined
     |-[-] plugins
        |- The actual access control
           plugins incorporating
           access levels and controlling
           the access via :allowed_to?
           methods
